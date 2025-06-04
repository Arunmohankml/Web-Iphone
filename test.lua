function Split(inputstr, sep)
	if sep == nil then
		sep = "%s"
	end
	local t={}
	for str in string.gmatch(inputstr, "([^"..sep.."]+)") do
		table.insert(t, str)
	end
	return t
end
function GetDataFromFile(path, sep)
	local file = io.open(path, "r")
	if file then
		io.input(file)
		local lines = io.read()
		local parts = Split(lines, sep)
		io.close(file)
		return parts
	else
		return nil
	end
end

function SaveDataToFile(path, data, sep)
	os.remove(path)
	local tempstring = ""
	for i=1,#data,1 do
		if(i ~= #data) then
			tempstring = tempstring .. data[i] .. sep
		else
			tempstring = tempstring .. data[i]
		end
	end
	local f,err = io.open(path, "w")
    if not f then return print(err) end
    f:write(tempstring)
    f:close()
end

local playername = "Arun"


local contacts = {"John Doe", "Jane Smith", "Alice Wonderland"} -- Example contacts
local path = "data/"..playername..".contacts" -- Path to the file
local separator = "," -- Use a comma as the separator (or choose another)

SaveDataToFile(path, contacts, separator)
print("Contacts saved to file!")
datas= GetDataFromFile(path,separator)
print(datas)