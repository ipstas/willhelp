import { Accounts } from 'meteor/accounts-base';

// Options

Accounts.ui.config({
  requestPermissions: {
		google: ['profile','email','openid'],
    facebook:  ['email', 'public_profile'],
  },
  requestOfflineToken: {
    google: true
  },
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

if ('AccountsTemplates' in window) {
	AccountsTemplates.configure({
		defaultLayout: 'layoutLanding',
		defaultLayoutRegions: {
			nav: 'nav',
			footer: 'footer',
		},
		defaultContentRegion: 'main',
		showForgotPasswordLink: true,
		//overrideLoginErrors: true,
		enablePasswordChange: true,

		// sendVerificationEmail: true,
		// enforceEmailVerification: true,
		//confirmPassword: true,
		//continuousValidation: false,
		//displayFormLabels: true,
		//forbidClientAccountCreation: true,
		//formValidationFeedback: true,
		//homeRoutePath: '/',
		//showAddRemoveServices: false,
		//showPlaceholders: true,

		negativeValidation: true,
		positiveValidation: true,
		negativeFeedback: false,
		positiveFeedback: true,

/*     homeRoutePath: '/',
    redirectTimeout: 1000, */
		
		// Privacy Policy and Terms of Use
		//privacyUrl: 'privacy',
		//termsUrl: 'terms-of-use',
		texts: {
			errors: {
				// accountsCreationDisabled: "Client side accounts creation is disabled!!!",
				// cannotRemoveService: "Cannot remove the only active service!",
				// captchaVerification: "Captcha verification failed!",
				loginForbidden: "error.accounts.Wrong username or password",
				mustBeLoggedIn: "error.accounts.Please login",
				pwdMismatch: "error.pwdsDontMatch",
				// validationErrors: "Validation Errors",
				// verifyEmailFirst: "Please verify your email first. Check the email and follow the link!",
			}
		},
	
	});

	var pwd = AccountsTemplates.removeField('password');
	AccountsTemplates.removeField('email');
	AccountsTemplates.addFields([
		{
			_id: "username",
			type: "text",
			displayName: "username",
			required: true,
			minLength: 5,
		},
		{
			_id: 'email',
			type: 'email',
			required: true,
			displayName: "email",
			re: /.+@(.+){2,}\.(.+){2,}/,
			errStr: 'Invalid email',
		},
		{
			_id: 'username_and_email',
			placeholder: 'username or email',
			type: 'text',
			required: true,
			displayName: "Login",
		},
		pwd
	]);
}
