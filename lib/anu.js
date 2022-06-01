const { downloadContentFromMessage } = require('@adiwajshing/baileys');
const fetchh = require('node-fetch')
const { writeFile } = require('fs/promises')

exports.fetch = fetch = (url) => new Promise(async (resolve, reject) => {
    fetchh(url)
        .then(response => response.json())
        .then(res => {
             resolve(res)
         })
         .catch((err) => {
             reject(err)
         })
 })
 const getBuffer = async (url, options) => {

		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
 }
 exports.downloadSaveImgMsg = downloadSaveImgMsg =(pesan, output) => new Promise(async (resolve, reject) => {
try {
const dunlud = await downloadContentFromMessage(pesan, 'image')
let buffer = Buffer.from([])
for await(const chunk of dunlud) {
buffer = Buffer.concat([buffer, chunk])
}
writeFile(output, buffer)
} catch (e) {
	console.log(e)
}
})