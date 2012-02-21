
function init(app, express) {

    var mongoose = require('mongoose');

    var urls = require('./urls.js');

    var User = mongoose.model('User');
    var Post = mongoose.model('Post');

    app.configure(function () {
        app.use(express.bodyParser());
        app.use(express.methodOverride());
    });
    
    app.get('/api', function (req, res) {
        res.send({resources: urls.resolve(req, ["users", "posts"])});
    });

    app.get('/api/users', function (req, res) {
        return User.find(function (err, users) {
            if (!err) {
                return res.send(users);
            } else {
                return console.log(err);
            }
        });
    });

    app.get('/api/posts', function (req, res) {
        return Post.find(function (err, posts) {
            if (!err) {
                return res.send(posts);
            } else {
                return console.log(err);
            }
        });
    });

    app.put('/api/posts', function (req, res) {
        var post = new Post(req.body);
        post.save(function (err) {
            if (!err) {
                return res.send({_id : post._id});
            } else { 
                console.log(err);
                return res.send(400);
            }
        });
    });

    app.delete('/api/posts/:id', function (req, res){
        return Post.findById(req.params.id, function (err, post) {
            return post.remove(function (err) {
                if (!err) {
                    return res.send('');
                } else {
                    console.log(err);
                    return res.send(500);
                }
            });
        });
    }); 

}

module.exports.init = init;
