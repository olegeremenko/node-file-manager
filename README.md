# node-file-manager

## Description

- No external dependencies required
- Use 18 LTS version of Node.js
- Start the program in following way:
```bash
npm run start -- --username=your_username
```

List of available operations:
- Navigation & working directory
    - Go upper from current directory:
    ```bash
    up
    ```
    - Go to dedicated folder from current directory:
    ```bash
    cd path_to_directory
    ```
    - Print in console list of all files and folders in current directory:
    ```bash
    ls
    ```

- Basic operations with files
    - Read file and print it's content in console:
    ```bash
    cat path_to_file
    ```
    - Create empty file in current working directory:
    ```bash
    add new_file_name
    ```
    - Rename file:
    ```bash
    rn path_to_file new_filename
    ```
    - Copy file:
    ```bash
    cp path_to_file path_to_new_directory
    ```
    - Move file:
    ```bash
    mv path_to_file path_to_new_directory
    ```
    - Delete file:
    ```bash
    rm path_to_file
    ```
- Operating system info
    - Get EOL (default system End-Of-Line) and print it to console
    ```bash
    os --EOL
    ```
    - Print host machine CPUs info (overall amount of CPUS plus model and clock rate
    ```bash
    os --cpus
    ```
    - Get home directory and print it to console
    ```bash
    os --homedir
    ```
    - Get current *system user name* and print it to console
    ```bash
    os --username
    ```
    - Get CPU architecture for which Node.js binary has compiled and print it to console
    ```bash
    os --architecture
    ```
- Hash calculation
    - Calculate hash for file and print it into console
    ```bash
    hash path_to_file
    ```
- Compress and decompress operations
    - Compress file (using Gzip)
    ```bash
    compress path_to_file path_to_destination
    ```
    - Decompress file (from Gzip arh)
    ```bash
    decompress path_to_file path_to_destination
    ```
