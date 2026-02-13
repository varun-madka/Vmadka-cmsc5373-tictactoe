import { PlayRecordModel } from "../model/PlayRecordModel.js";
import { getPlayRecordList } from "./firestore_controller.js";
export class PlayRecordController {
    view = null;
    model = null;

    constructor() {
        this.model = new PlayRecordModel();
    }

    setView(view) {
        this.view = view;
    }

    async loadPlayRecords() {
        try {
            const records = await getPlayRecordList();
            return records;
        } catch (e) {
            console.error('Error loading play records:', e);
            alert('Error loading play records');
            return null;
        }
    }
}