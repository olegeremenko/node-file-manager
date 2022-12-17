import { readdir } from 'fs/promises';

const formatFileInfo = (item) => {
    return {
        name: item.name,
        type: item.isFile() ? 'file' : 'directory',
    };
};

const sortHandler = (file1, file2) => {
    if (file1.type > file2.type) {
        return 1;
    }
    if (file1.type < file2.type) {
        return -1;
    }
    if (file1.name > file2.name) {
        return 1;
    }
    if (file1.name < file2.name) {
        return -1;
    }
    return 0;
};

const listFiles = async () => {
    const currentDir = process.cwd();
    const filesListRaw = await readdir(currentDir, { withFileTypes: true });
    const filesList = filesListRaw
        .map(file => formatFileInfo(file))
        .sort((file1, file2) => sortHandler(file1, file2))
    console.table(filesList);
};

export default listFiles;
