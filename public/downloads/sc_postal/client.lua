local raw = LoadResourceFile(GetCurrentResourceName(), GetResourceMetadata(GetCurrentResourceName(), 'postal_file'))
local postals = json.decode(raw)

exports('getPostal', function()
			local x, y = table.unpack(GetEntityCoords(GetPlayerPed(-1)))

			local ndm = -1 -- nearest distance magnitude
			local ni = -1 -- nearest index
			for i, p in ipairs(postals) do
				local dm = (x - p.x) ^ 2 + (y - p.y) ^ 2 -- distance magnitude
				if ndm == -1 or dm < ndm then
					ni = i
					ndm = dm
				end
			end

			--setting the nearest
			if ni ~= -1 then
				local nd = math.sqrt(ndm) -- nearest distance
				nearest = {i = ni, d = nd}
			end
			return postals[nearest.i].code
end)