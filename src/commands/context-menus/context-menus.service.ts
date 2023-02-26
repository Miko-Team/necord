import { Client } from 'discord.js';
import { Injectable, Logger, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { ContextMenuDiscovery, ContextMenuMeta } from './context-menu.discovery';
import { CONTEXT_MENU_METADATA } from '../../necord.constants';
import { ExplorerService } from '../../necord-explorer.service';
import { CommandDiscovery } from '../command.discovery';

@Injectable()
export class ContextMenusService implements OnModuleInit, OnApplicationBootstrap {
	private readonly contextMenus = new Map<string, ContextMenuDiscovery>();
	private readonly logger = new Logger(ContextMenusService.name);

	public constructor(
		private readonly client: Client,
		private readonly explorerService: ExplorerService<ContextMenuDiscovery>
	) {}

	public onModuleInit() {
		return this.explorerService
			.explore(CONTEXT_MENU_METADATA)
			.forEach(contextMenu => this.add(contextMenu));
	}

	public onApplicationBootstrap() {
		return this.client.on('interactionCreate', interaction => {
			if (!interaction.isContextMenuCommand()) return;

			return this.contextMenus
				.get(this.getId(interaction.commandType, interaction.commandName))
				?.execute(interaction);
		});
	}

	public getCommands(): CommandDiscovery[] {
		return [...this.contextMenus.values()];
	}

	public add(contextMenu: ContextMenuDiscovery): void {
		const id = this.getId(contextMenu.getType(), contextMenu.getName());
		if (this.contextMenus.get(id)) {
			this.logger.warn(`ContextMenu with id : ${id} is already exists`);
		}
		this.contextMenus.set(id, contextMenu);
	}

	public remove(type: ContextMenuMeta['type'], name: ContextMenuMeta['name']): boolean {
		return this.contextMenus.delete(this.getId(type, name));
	}

	private getId(type: ContextMenuMeta['type'], name: string) {
		return type.toString().concat(':', name);
	}
}
