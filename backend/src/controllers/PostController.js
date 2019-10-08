const Post = require('../models/Posts');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {
    async index(req, res) {
        const posts = await Post.find().sort();
        return res.json(posts);
    },

    async store(req, res) {
        const { author, place, description, hashtags } = req.body;
        const {filename: image} = req.file;

        await sharp(req.file.path)
            .resize(500)
            .jpeg()
            .toFile(
                path.resolve(req.file.destination, 'resized', image)
            )
        
        fs.unlinkSync(req.file.path);

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image,
        });

        return res.json(post);
    }
}