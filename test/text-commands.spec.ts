import { Injectable } from '@nestjs/common';
import { ContextOf, Ctx, On, Opts, TextCommand } from '../src';
import { createApplication } from './utils.spec';

@Injectable()
class TextCommandsSpec {
	@On('debug')
	public onDebug(@Ctx() [message]) {
		return console.debug(message);
	}

	@TextCommand('ping')
	public onPing(@Ctx() [message]: ContextOf<'messageCreate'>) {
		return message.reply('pong!');
	}

	@TextCommand('length')
	public onLength(@Ctx() [message]: ContextOf<'messageCreate'>, @Opts() args: string[]) {
		return message.reply('Your message length - ' + args.join(' ').length);
	}
}

const bootstrap = async () => {
	const app = await createApplication(TextCommandsSpec);
};

bootstrap();
