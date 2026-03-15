# AsciimojiChat

Adds an `ASCIImoji` button to the Discord chat bar and lets you insert or auto-replace text-based emoticons like `(shrug)` and `(bear)`.

## Features

- Adds a chat bar button that opens a searchable ASCIImoji picker
- Inserts either the final ASCIImoji or the token form, depending on your setting
- Replaces matching tokens automatically when sending messages
- Can also replace tokens when editing messages
- Supports custom replacements

## Example Tokens

- `(shrug)` -> `¯\_(ツ)_/¯`
- `(tableflip)` -> `(╯°□°）╯︵ ┻━┻`
- `(bear)` -> `ʕ·͡ᴥ·ʔ`
- `(lenny)` -> `( ͡° ͜ʖ ͡°)`

## Installation

1. Put `AsciimojiChat.plugin.js` in your BetterDiscord plugins folder.
2. Open BetterDiscord settings.
3. Enable `AsciimojiChat`.

## How To Use

1. Click the `ASCIImoji` button in the chat bar.
2. Search for the ASCIImoji you want.
3. Click an entry to insert it into the message box.

You can also type tokens directly in chat, such as `(shrug)`, and let the plugin replace them when you send the message.

## Settings

- `Prefix`: Starting delimiter for tokens
- `Suffix`: Ending delimiter for tokens
- `Insert mode`: Insert the final ASCIImoji or the token text
- `Match keys case-insensitively`: Lets `(Shrug)` match the same as `(shrug)`
- `Replace tokens on send`: Replaces tokens when sending a message
- `Replace tokens on edit`: Replaces tokens when editing a message
- `Custom Replacements`: Add your own `key = value` pairs

## Custom Replacements

Add one entry per line:

```txt
wavehi = ( ^_^)/
happycat = =^.^=
```

Then use them like:

```txt
(wavehi)
(happycat)
```

## Notes

- The plugin works in the normal Discord message composer.
- If a token does not exist, it stays unchanged.
- BetterDiscord is required.
