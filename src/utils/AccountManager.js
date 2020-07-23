import UIkit from "uikit";
import { ElementManipulator, SpinnerVisuals } from "./ElementManipulator";
import { iroha_network, full_app } from "./Constants";

var manipulator = new ElementManipulator;
var executor = require('axios').default;

/** This mini-library is used by the landing site to interact with the
 * Iroha ledger. The purpose of this library is to let the users create 
 * new accounts and authenticate in their existing ones.
 */
export class AccountManager {
    /** The regex pattern of all account names on the ledger */
    accountPattern = /^[a-z_0-9]{1,32}$/

    /**
     * This method is used to generate a new account on the Iroha blockchain that powers Instrumentality
     * @param {String} username The name of the account. Must be uinque on the network.
     * @param {*} spinnerVisuals An object obtained from calling ElementManipulator.getSpinnerVisuals()
     * */
    createAccount (username, spinnerVisuals = null) {
        // If you pass another type of object than SpinnerVisuals I exit
        if(spinnerVisuals instanceof SpinnerVisuals === false && spinnerVisuals != null) {
            console.log("Bad options! Not going any further!");
            return -1;
        }

        if (this.accountPattern.test(username) === true) {
            executor
                .get(`${iroha_network}/account/create/${username}/Instrumentality`)
                .then ((response) => {
                    console.log(response.data.msg);
                    spinnerVisuals.toggle();
                    manipulator.notify("Account created successfully!", "success");
                    this.showKeys(response.data.public_key, response.data.private_key);
                })
                .catch((error) => {
                    console.log("This went wrong: " + error.response.data.msg);
                    spinnerVisuals.toggle();
                    manipulator.notify(error.response.data.msg, "danger");
                });
        }
        else {
            spinnerVisuals.toggle();
            manipulator.notify("Use only small letters, numbers, and '_'", 'danger');
            console.log("Illegal character!");
        }
    }

    showKeys(publicKey, privateKey) {
        var content = 
            `
            <div class="uk-modal-header uk-text-center">
                <h2>Please save these keys in a safe place!</h2>
            </div>
            <div class="uk-modal-body uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-text-center">
                <h3>Public Key:</h3>
                <span style="overflow-wrap: anywhere;">${publicKey}</span>
                <h3>Private Key:</h3>
                <span style="overflow-wrap: anywhere;">${privateKey}</span>
            </div>
            <div class="uk-modal-footer uk-flex uk-flex-middle uk-flex-center">
                <button class="uk-button uk-button-primary uk-modal-close" type="button">I saved the keys</button>
            </div>
            `;
        manipulator.createModal(content);
    }

    authAccount(username, privateKey, spinnerVisuals = null) {
        // If you pass another type of object than SpinnerVisuals I exit
        if(spinnerVisuals instanceof SpinnerVisuals === false && spinnerVisuals != null) {
            console.log("Bad options! Not going any further!");
            return -1;
        }

        
        spinnerVisuals.toggle();
        executor({
            method: 'post',
            url: `${iroha_network}/account/auth`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                username: username,
                privateKey: privateKey
            }
        }).then((response) => {
            console.log(response.data.msg);
            spinnerVisuals.toggle();
            manipulator.notify("Authenticated successfully", 'success');
            // Redirect to full application
            // For secure auth a token should be passed at redirection
            executor.get(`${iroha_network}/redirect/fullapp`); // Performs auth on main app with pubkey
            window.location = full_app + "/home";
        }).catch((error) => {
            let errMsg = error.response.data.msg;
            console.error("This went wrong: " + errMsg);
            spinnerVisuals.toggle();
            manipulator.notify(errMsg, 'danger');
        });
        
    }
}