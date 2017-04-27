import React from 'react';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.signout = this.signout.bind(this);
        this.signin = this.signin.bind(this);
    }

    componentDidMount() {
        window.gapi.load('auth2', () => {
            if (!window.gapi.auth2.getAuthInstance()) {
                if (!window.config || !window.config.googleClientId) {
                    this.props.showError('Missing Google Client ID or config file / static / config.js');
                } else {
                    window.gapi.auth2.init({
                        client_id: window.config.googleClientId
                    }).then(() => {
                        this.setState({ disabled: false });
                    });
                }
            }
        });
    }

    signin() {
        const auth2 = window.gapi.auth2.getAuthInstance();
        auth2.signIn().then(googleUser => {
            fetch('/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id_token: googleUser.getAuthResponse().
                        id_token
                }),
            }).then(response => {
                if (response.ok) {
                    response.json().then(user => {
                        this.props.onSignin(user.name);
                    });
                } else {
                    response.json().then(error => {
                        this.props.showError(`App login failed: ${error}`);
                    });
                }
            })
                .catch(err => {
                    this.props.showError(`Error posting login to app: ${err}`);
                });
        }, error => {
            this.props.showError(`Error authenticating with Google: ${error}`);
        });
    }

    signout() {
        const auth2 = window.gapi.auth2.getAuthInstance();
        fetch('/signout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            if (response.ok) {
                auth2.signOut().then(() => {
                    this.props.showSuccess('Successfully signed out.');
                    this.props.onSignout();
                });
            }
        });
    }

    render() {
        if (this.props.user.signedIn) {
            return (
                <div>
                    <p>You are signed in</p>
                    <p></p>
                    <button onclick={this.signout}>Sign out</button>
                </div>

            );
        }
        return (
            <button onclick={this.signin}>Sign in</button>
        );
    }
}
SignIn.propTypes = {
    user: React.PropTypes.object,
    onSignin: React.PropTypes.func.isRequired,
    onSignout: React.PropTypes.func.isRequired,
    showError: React.PropTypes.func.isRequired,
    showSuccess: React.PropTypes.func.isRequired,
};