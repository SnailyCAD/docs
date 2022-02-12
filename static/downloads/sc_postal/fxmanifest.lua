local postalfile = 'new-postals.json'
-- Resource Metadata
fx_version 'cerulean'
games { 'gta5' }

author 'Nap14hockey'
description 'Gets the nearest postal code of the user -> hooks into snailyCAD resources'
version '1.0.0'
-- What to run
client_scripts {
    'client.lua',
}
file(postalfile)
postal_file(postalfile)
