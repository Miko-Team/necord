# Changelog
All notable changes to this project will be documented in this file.

# [5.3.1](https://github.com/necordjs/necord/compare/v5.3.0...v5.3.1) - (2022-11-26)

## Features

- Target decorators for message, user, member ([47ccc2a](https://github.com/necordjs/necord/commit/47ccc2a7968c726c990ba5b66f54c267681bb777))

# [5.3.0](https://github.com/necordjs/necord/compare/v5.2.0...v5.3.0) - (2022-09-17)

## Features

- **modal:** Add dynamic matching (#385) ([96a0c8f](https://github.com/necordjs/necord/commit/96a0c8ff235655fff3838e0e5e78b12cdd50f3fa))

# [5.2.0](https://github.com/necordjs/necord/compare/v5.1.0...v5.2.0) - (2022-08-11)

## Features

- Add get guilds method and guilds property (#352) ([487caf2](https://github.com/necordjs/necord/commit/487caf2fdefed98c558518f5fedcac63cb4f528d))

# [5.1.0](https://github.com/necordjs/necord/compare/v5.0.3...v5.1.0) - (2022-07-31)

## Bug Fixes

- Usage without data parameter for `ComponentParam` ([8c7ce11](https://github.com/necordjs/necord/commit/8c7ce11d620134d4f8e8e4dac9cb56984d1e0917))

## Features

- Support dynamic matching for components ([1b470b3](https://github.com/necordjs/necord/commit/1b470b3ee80db37d285ee010153431e2a5847627))

# [5.0.1](https://github.com/necordjs/necord/compare/v4.3.3...v5.0.1) - (2022-07-17)

## Bug Fixes

- Types for guild features lmao ([d6f3727](https://github.com/necordjs/necord/commit/d6f3727fa60f0639de7a439d8299ee095ac7659c))
- Change `SlashCommandContext` type ([3d111da](https://github.com/necordjs/necord/commit/3d111dac386d89045975a2c60b2c1c8c09f92797))
- Change autocomplete type, tysm djs :) ([a1d1400](https://github.com/necordjs/necord/commit/a1d1400879ecdcaac8c1d826cf17f03b668251e5))
- Remove update topic event ([82403a4](https://github.com/necordjs/necord/commit/82403a49610f8997b933ecbd6d40310273775abf))
- Remove update topic event ([061470c](https://github.com/necordjs/necord/commit/061470cc3e8be62ec5de9ba3799f6cf4c0f34674))
- Change description localizations property ([d20d658](https://github.com/necordjs/necord/commit/d20d65883be04c07749536a0c5f4756cab1b053d))
- Context and event interfaces ([60b7002](https://github.com/necordjs/necord/commit/60b700277539bfbd17f6a47c450d6b70ab22ca85))
- Add check for subcommands ([7b3a07a](https://github.com/necordjs/necord/commit/7b3a07ad449f99b69a4716d49f2199da76d1dca7))
- Remove locals due memory leak ([6857e01](https://github.com/necordjs/necord/commit/6857e0134dbf605a998df62e0d7e038408b83ed1))
- Inherited arguments ([a4a74f3](https://github.com/necordjs/necord/commit/a4a74f3524ff53ed77acf4440a8b288b284c030e))
- Types ([3196848](https://github.com/necordjs/necord/commit/3196848b54d8c78ccdafaceafceb83465e8df8a2))
- Remove rest provider ([b24948e](https://github.com/necordjs/necord/commit/b24948ed70b1daba361d81860c0101a46b6fdeab))

## Documentation

- Add git cliff for changelog ([a1e8168](https://github.com/necordjs/necord/commit/a1e81689e7f3756456a12304f33f8822db6eda83))

## Features

- Support last breaking changes from djs ([6442ff3](https://github.com/necordjs/necord/commit/6442ff3934aa7803c4045668d2e15feb3764abd1))
- Add error for registering subcommands w/o root command ([3111de3](https://github.com/necordjs/necord/commit/3111de37db112cf325ddce2a0cbbf14d46f310ab))
- Target decorator for context menus ([044c701](https://github.com/necordjs/necord/commit/044c701c89589863c097b2bac527e7e9dfe93716))
- Support subcommands ([5d23173](https://github.com/necordjs/necord/commit/5d231738bf04f165aa2d1f36d815fd4ea9e07a06))
- Support last 14 version djs ([7a58e06](https://github.com/necordjs/necord/commit/7a58e06747d725a75258aec5e724c7ef5231918e))
- Add nsfw property ([8179940](https://github.com/necordjs/necord/commit/8179940f6455fe34d732036d0f1996adc02865f8))
- Discordjs 14, modals, attachment option ([6dfbe8d](https://github.com/necordjs/necord/commit/6dfbe8d62ba8b0232fbfd9eb7b03fdc72a291d16))

## Refactor

- Make autocomplete as interceptor ([80c9f0b](https://github.com/necordjs/necord/commit/80c9f0b8c76ffeebe1d8a65bacbcf97b968537a0))
- Change explorer service template and name ([369f7cc](https://github.com/necordjs/necord/commit/369f7cc0943679e944b30eedb7bbc8edb129a988))
- Explorer templates ([aa0ea19](https://github.com/necordjs/necord/commit/aa0ea195b46c4ae12f6e5a95bb0989af523a133e))
- Remove custom function from explorer ([d7a4121](https://github.com/necordjs/necord/commit/d7a41216e8f43ff6fb93419066697528397a0e26))
- Use discord.js imports ([85121f7](https://github.com/necordjs/necord/commit/85121f7c6bedf955d3bf8742e146559381cde049))
- Change flow for commands and discovery, support permissions v2 ([c3dea7e](https://github.com/necordjs/necord/commit/c3dea7efd8d028aa163b5f0b3fce090382668804))
- Change slash command interface and decorator to object ([bd0853b](https://github.com/necordjs/necord/commit/bd0853bd405ac3492942bd1f622fc1ea58c839f8))
- Change interfaces ([05b8079](https://github.com/necordjs/necord/commit/05b807948f646f0c3458ce0c582076d38b2fc762))
- Change flow and folder structure ([3e2edc0](https://github.com/necordjs/necord/commit/3e2edc0a81118c73e97480dde60465b33f6ee26f))
- Use object instead inline for context menus ([0b27dca](https://github.com/necordjs/necord/commit/0b27dca45a16de708caffd42bf6929328141e359))
- Change decorators type ([1f7a48d](https://github.com/necordjs/necord/commit/1f7a48d407e899066abbc565254b85a0ac6ea502))
- Some improvements ([4ac637d](https://github.com/necordjs/necord/commit/4ac637d7e024d3daf50342b592cde8ce2c4033f8))
- Remove cooldown guard, use @nestjs/throttle! ([c57a237](https://github.com/necordjs/necord/commit/c57a23736642120bf27ffe170a05f9846e5c3230))

## Styling

- Change `cliff.toml` ([6c889ac](https://github.com/necordjs/necord/commit/6c889ac019c9361401b1d83187b5ffa67a80d19b))
- Lint ([61eb75b](https://github.com/necordjs/necord/commit/61eb75b5530c768c79665ebe04462a61a9b63c86))
- Add lint-staged ([bfa8c31](https://github.com/necordjs/necord/commit/bfa8c31f674a7912df60f3f216d113712b8d8fb7))
- Lint ([47a959a](https://github.com/necordjs/necord/commit/47a959a2be348a05eb33d693824a4355cb84068e))

## Testing

- Getting context menu data from `@Options` ([e3d9181](https://github.com/necordjs/necord/commit/e3d918159051f5155dd936b6c87f0f8a55723cf3))
- Remove old decorators ([15eb501](https://github.com/necordjs/necord/commit/15eb501c16da92c89dc12eee91b1b072ab27f13b))
- Remove discovery from text command ([d1588a6](https://github.com/necordjs/necord/commit/d1588a60fd5f38afab7afc2352acb729a5d061b4))
- Change flow and add message-component spec ([1eabdbe](https://github.com/necordjs/necord/commit/1eabdbef141f5674aee698ddfd60d2f78395617b))
- Wtf ([8c3824b](https://github.com/necordjs/necord/commit/8c3824b095db7ed1523f21b57a285d1c56d54ce2))
- Change intents for client ([e1b1797](https://github.com/necordjs/necord/commit/e1b1797ca3a7aaf2f77b30371831cc5e1a2685ec))
- Change text command inline to object ([85980a7](https://github.com/necordjs/necord/commit/85980a7602d1debb6b4f4ec32d159c7b2474d8a9))
- Make global guilds ([c612b45](https://github.com/necordjs/necord/commit/c612b45e7c003f4e7f34e706ea7ed1b7e17761d6))
