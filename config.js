module.exports = {
        px: '.',
        token: 'OTE4ODkyNTg2NTU3NjUzMDIy.YbN3aA.pj2WX2hN9lDwI_sz1UUatc4KNds', 
        playing: 'MUPSIC',

    opt: {
        DJ: {
            enabled: false, 
            roleName: 'DJ', 
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume']
        },
        maxVol: 250, 
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', 
                highWaterMark: 1 << 25 
            }
        }
    }
};
