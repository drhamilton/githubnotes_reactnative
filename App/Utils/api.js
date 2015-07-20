var api = {
	getBio(username){
		username = username.toLowerCase().trim();
		var url = `https://api.github.com/users/${username}`;
		return fetch(url).then((res) => res.json());
	},
	getRepos(username){
		username = username.toLowerCase().trim();
		var url = `https://api.github.com/users/${username}/repos`;
		//keeps context of parent func
		//dont need to write function
		return fetch(url).then((res) => res.json());
	}
};

module.exports = api;