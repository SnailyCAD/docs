local usePostal = false -- Requires SnailyCADv4-Postal
TriggerEvent('chat:addSuggestion', '/call911', 'Call available 911 operators', {
    { name="description", help="Description of your call" },
})

RegisterNetEvent("911Call")
AddEventHandler("911Call", function(name, description)
    -- player coords
    x, y, z = table.unpack(GetEntityCoords(GetPlayerPed(-1), true))
    -- get street name
    lastStreet = GetStreetNameAtCoord(x, y, z)
    lastStreetName = GetStreetNameFromHashKey(lastStreet)
	if usePostal then
		lastStreetName =  exports['SnailyCADv4-Postal']:getPostal() .. ' ' .. lastStreetName
	end
    TriggerServerEvent("911CallUpdate", lastStreetName, name, description, { x, y, z })


    -- send confirm message
    sendNotification("CHAR_CALL911", 0, "Your call has been reported to the emergency services", "Emergency Services")
end)

-- message function
function sendNotification(picture, icon, message, title)
    SetNotificationTextEntry("STRING")
    AddTextComponentString(message)
    SetNotificationMessage(picture, picture, true, icon, title)
end