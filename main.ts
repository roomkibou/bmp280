BMP280.Address(BMP280_I2C_ADDRESS.ADDR_0x76)
basic.forever(function () {
    BMP280.PowerOff()
    BMP280.PowerOn()
    serial.writeValue("temp", BMP280.temperature())
    serial.writeValue("press", Math.round(BMP280.pressure() / 100))
    basic.pause(5000)
})
