import { notesReducer } from "../reducers/notesReducer";

export const types = {
	login: "[Auth] Login",
	logout: "[Auth] Logout",

	uiSetError: "[UI] Set error",
	uiRemoveError: "[UI] Remove error",

	uiStartLoading: "[UI] Start loading",
	uiFinishLoading: "[UI] Finish loading",

	notesAddNew: "[NOTES] New note",
	notesActive: "[NOTES] Set active note",
	notesLoad: "[NOTES] Load notes",
	notesUpdated: "[NOTES] Update note",
	notesFileUrl: "[NOTES] Update image url",
	notesDelete: "[NOTES] Delete note",
	notesLogoutCleaning: "[NOTES] Logout clean",
};