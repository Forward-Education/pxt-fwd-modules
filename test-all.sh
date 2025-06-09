#!/bin/bash

# Define colors
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# This script will iterate through each immediate subdirectory
# and run 'mkc' within that subdirectory.
# It will NOT run 'mkc' in the top-level directory where the script is executed.

# Check if 'mkc' command exists
if ! command -v mkc &> /dev/null
then
    echo -e "${RED}Error: 'mkc' command not found. Please ensure 'mkc' is installed and in your PATH.${NC}"
    exit 1
fi

echo "Starting 'mkc' in subdirectories..."
echo "-----------------------------------"

overall_status=0 # 0 for success, 1 for errors

# Loop through each item in the current directory
for dir in */; do
    # Check if it's a directory
    if [ -d "$dir" ]; then
        echo "Entering directory: $dir"
        # The 'cd "$dir" && command' ensures the command runs in the correct directory.
        # The parentheses '( )' create a subshell, so the 'cd' only affects that subshell,
        # and the script returns to the original directory after the command.
        (cd "$dir" && echo "Running 'mkc' in $(pwd)" && mkc)
        
        # Check the exit status of the last command (mkc)
        if [ $? -ne 0 ]; then
            echo -e "${RED}Error running 'mkc' in $dir${NC}"
            overall_status=1
        fi
        echo "-----------------------------------"
    fi
done

echo "End of script"

# Final status message
if [ $overall_status -eq 0 ]; then
    echo -e "${GREEN}All builds OK${NC}"
else
    echo -e "${RED}Build error(s)${NC}"
fi
