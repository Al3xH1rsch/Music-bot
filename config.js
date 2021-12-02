module.exports = {
    app: {
        px: '?',
        token: 'ODcxMDI1MDQzNDkxMTUxOTIz.YQVTSQ.UnY7v4NrS8TEEysQLCNOsWD9RxI',
        playing: 'by Zerio ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
