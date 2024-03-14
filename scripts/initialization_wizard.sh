#!/bin/bash
ENV_EXAMPLE_FILE=".env.example"
ENV_FILE=".env"

echo -e "\nStarted preparation script\n"

# STEP 1: Prepare .env file
if [[ ! -e $ENV_EXAMPLE_FILE ]]
then
  echo -e "\nPlease provide example of environment file "$ENV_EXAMPLE_FILE"\n"
  exit 0
fi

echo -e "\"$ENV_EXAMPLE_FILE\" exists, choose an option how to process it:\n
1. C - create \"$ENV_FILE\" and copy all variables from \"$ENV_EXAMPLE_FILE\" into it. If \"$ENV_FILE\" exists all variables will be overwritten
2. A - append variables from \"$ENV_EXAMPLE_FILE\" to \"$ENV_FILE\"
2. S - skip step
"
read ENV_PROCESS

case "$ENV_PROCESS" in
  [cC])
    cp $ENV_EXAMPLE_FILE $ENV_FILE
    echo -e "\"$ENV_EXAMPLE_FILE\" file content copied to \"$ENV_FILE\""
    ;;
  [aA])
    echo -e "\nNot implemented yet"
    ;;
  [sS])
    echo -e "\nStep skipped"
    ;;
  *)
    echo -e "\nInvalid choice: $ENV_PROCESS"
    ;;
esac


