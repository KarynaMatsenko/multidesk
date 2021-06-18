import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
    onLogout: (listener: () => void) => {
        ipcRenderer.on('logout', () => {
            listener();
        });
    },
    showContextMenu: () => {
        ipcRenderer.send('show-context-menu');
    }
})
