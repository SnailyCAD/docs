--[[
--------------------------------------
SNAILYCAD 911 SCRIPT Edited by Rhys19 - Updated for version 4!
SNAILYCAD CREATED BY CASPER
]]
-- CONFIG
-------------------------------------------
--- Url to the "server" of the CAD, default port is 8080
local CAD_API = "http://api.yourdomain.com" -- CAD API URL/IP
local CAD_API_KEY = "CAD_API_KEY"
-------------------------------------------

-- Register chatmessage
RegisterServerEvent("chatMessage")

RegisterCommand(
    "call911",
    function(source, args)
        CancelEvent()
        local name = GetPlayerName(source)
        local description = args
        TriggerClientEvent("911Call", source, name, description)
    end
)

-- register the updater
RegisterServerEvent("911CallUpdate")

-- POST the call to the CAD
AddEventHandler(
    "911CallUpdate",
    function(street, name, description, coords)
        PerformHttpRequest(
            CAD_API .. "/v1/911-calls",
            function(err, text, headers)
            end,
            "POST",
            json.encode(
                {
                    location = street,
                    name = name,
                    assignedUnits = {},
                    description = table.concat(description, " ")
                }
            ),
            {
                ["Content-Type"] = "application/json",
                ["snaily-cad-api-token"] = CAD_API_KEY
            }
        )
        CancelEvent()
    end
)
