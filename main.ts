function doOpen () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 270)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P4, 90)
}
function doClosed () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 180)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P4, 180)
}
doClosed()
basic.pause(5000)
basic.forever(function () {
    if (ModuleWorld_Digatal.PIR(ModuleWorld_Digatal.mwDigitalNum.P2P3, ModuleWorld_Digatal.enPIR.OPIR)) {
        doOpen()
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.Green)
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        basic.pause(3000)
        doClosed()
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.Red)
        music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
    }
})
