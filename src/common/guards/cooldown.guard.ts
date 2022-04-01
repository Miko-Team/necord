import { Injectable, Optional } from '@nestjs/common';
import { Collection, Interaction } from 'discord.js';
import { NecordExecutionContext } from '../../context';
import { BaseGuard } from './base.guard';
import { Observable } from 'rxjs';
import { CommandException } from '../enums/command-exception.enum';
import { NecordException } from '../exceptions';

export enum BucketType {
	GUILD,
	CHANNEL,
	USER
}

@Injectable()
export class CooldownGuard extends BaseGuard {
	private readonly storage = new Collection<string, number>();

	public constructor(
		private readonly ttl: number,
		@Optional()
		private readonly bucketType: BucketType = BucketType.USER
	) {
		super(false);
	}

	public checkPermissions(
		context: NecordExecutionContext,
		interaction: Interaction
	): boolean | Promise<boolean> | Observable<boolean> {
		const now = Date.now();

		const bucketKey = this.getBucketKey(interaction);
		const bucket = this.storage.ensure(bucketKey, () => now);

		if (bucket > now) {
			throw new NecordException(CommandException.COOLDOWN, {
				bucket
			});
		}

		return this.storage.set(bucketKey, now + this.ttl * 1000) && true;
	}

	private getBucketKey(interaction: Interaction): string {
		switch (this.bucketType) {
			case BucketType.GUILD:
				return interaction.guildId;
			case BucketType.CHANNEL:
				return interaction.channelId;
			case BucketType.USER:
				return interaction.user.id;
		}
	}
}
