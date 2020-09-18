json.array! @playlists, :id, :name, :intro


json.array! @songs do |song|
    json.name song.name
    json.artist song.intro
    json.cover song.image_url
    json.theme '#ebd0c2'
    json.url song.track_url
end