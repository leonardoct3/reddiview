const clientId = 'EiP-mFSuH-1VZ_9E0A1O0g'; // Replace with your client ID
const redirectUri = 'https://reddiview.netlify.app/';
let accessToken;
let expiresIn;

export const Reddit = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            expiresIn = Number(expiresInMatch[1]);

            // Clear the token after it expires
            window.setTimeout(() => (accessToken = ''), expiresIn * 10000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessUrl = `https://www.reddit.com/api/v1/authorize?client_id=${clientId}&response_type=token&state=random_string&redirect_uri=${redirectUri}&duration=temporary&scope=read+mysubreddits+vote`;
            window.location = accessUrl;
        }
    },
    async getPosts() {
        if (!accessToken) {
            accessToken = this.getAccessToken();
        }

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            };
            const response = await fetch('https://oauth.reddit.com/best', config);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const jsonResponse = await response.json();
            const { data } = jsonResponse;
            const { children } = data;
            return children.map((child) => child.data);
        } catch (error) {
            console.error(`Error fetching posts: ${error}`);
            return [];
        }
    },
    async getSubreddits() {
        if (!accessToken) {
            accessToken = this.getAccessToken();
        }

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            };
            const response = await fetch('https://oauth.reddit.com/subreddits/mine/', config);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const jsonResponse = await response.json();
            return jsonResponse.data.children.map((child) => child.data);
        } catch (error) {
            console.error(`Error fetching subreddits: ${error}`);
            return [];
        }
    },
    async getArticleComments(articleId) {
        if (!accessToken) {
            accessToken = this.getAccessToken();
        }

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            };
            const response = await fetch(`https://oauth.reddit.com/comments/${articleId}`, config);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const jsonResponse = await response.json();
            return jsonResponse[1].data.children.map((child) => child.data);
        } catch (error) {
            console.error(`Error fetching comments: ${error}`);
            return [];
        }
    },
    async vote(articleId, voteType) {
        if (!accessToken) {
            accessToken = this.getAccessToken();
        }

        try {
            const config = {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `dir=${voteType}`,
            };
            const response = await fetch(`https://oauth.reddit.com/api/vote?id=${articleId}`, config);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
        } catch (error) {
            console.error(`Error voting: ${error}`);
        }
    },
};
