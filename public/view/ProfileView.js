import { AbstractView } from "./AbstractView.js";
import { currentUser } from "../controller/firebase_auth.js";

export class ProfileView extends AbstractView {
    // instance variables
    controller = null;
    constructor(controller) {
        super();
        this.controller = controller;
    }

    async onMount() {
        if (!currentUser) {
            this.parentElement.innerHTML = '<h1>Access denied.</h1>';
            return;
        }
        console.log('HomeView.onMount() called');
    }

    async updateView() {
        console.log('ProfileView.updateView() called');
        const viewWrapper = document.createElement('div');
        viewWrapper.innerHTML = `<h2>Profile</h2>
        <p>Welcome to your profile page.</p>
        <p>Email: ${currentUser.email}</p>
        <p>User UID: ${currentUser.uid}</p>
        `;

        return viewWrapper;
        
    }
        
    attachEvents() {
        console.log('ProfileView.attachEvents() called');
    }

    async onLeave() {
        if (!currentUser) {
            this.parentElement.innerHTML = '<h1>Access denied.</h1>';
            return;
        }
        console.log('ProfileView.onLeave() called');
     }
}