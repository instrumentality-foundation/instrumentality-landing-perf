import UIkit from "uikit";
import { options } from "less";

/** This mini-library has the purpose of manipulating
 * different elements in the DOM. This is esspecially used in the 
 * authentication workflow.
 */
export class ElementManipulator {
    /** Can retrieve the text value out of input elements */
    getTextFromInput = getTextFromInput

    /** Can toggle spinner. Spinner must exist near the element you want to replace. */
    getSpinnerVisuals = getSpinnerToggler

    /** Can create simple notifications built on UIkit method */
    notify = notifyUIkit
    
    /**
     * This method builds a UIkit modal
     * @param {string} html Htm content to be shown in modal
     */
    createModal(html) {
        var modal = UIkit.modal.dialog(html, {
            "bg-close": false
        });

        modal.show();
    }
}

/**
 * A small object containing a button and a spinner that can toggle between them
 */
export class SpinnerVisuals {
    constructor(buttonId, spinnerId) {
        this.button = document.getElementById(buttonId);
        this.spinner = document.getElementById(spinnerId);
    }

    toggle() {
        toggleSpinner(this.button, this.spinner);
    }
}

/**
 * Get a SpinnerVisuals object 
 * @param {string} buttonId 
 * @param {string} spinnerId 
 */
function getSpinnerToggler(buttonId, spinnerId) {
    return new SpinnerVisuals(buttonId, spinnerId)
}

/** 
 * The getTextFromInput function can get the text value from input elements
 * @param {String} elementId 
 */
function getTextFromInput(elementId) {
    let element = document.getElementById(elementId);
    return element.value;
}

/**
 * The method replaces given element with spinner, visually.
 * It makes the assumption that there is a spinner element defined, but has 'display: none'
 * style.
 * @param {Element} element 
 * @param {Element} spinner
 */
function toggleSpinner(element, spinner) {
    if(element.style.display === "none") {
        spinner.style.display = "none";
        element.style.display = "inline-block";
    }
    else {
        element.style.display = "none";
        spinner.style.display = "inline-block";
    }
}

/**
 * Method used to display a simple notification using the UIkit built-in 
 * functions.
 * 
 * @param {string} msg A message to display in the notification
 * @param {string} status Type of message: success, danger, warning, etc.
 */
function notifyUIkit(msg, status) {
    UIkit.notification({
        message: msg,
        status: status
    });
}