#!/bin/bash
CONTAINER="db"
SCHEMA="public"
DB="cryptocurencies"
USER="postgres"

for file in */*.csv ; do
    filename=$(basename "$file" .csv)
    exec psql -h 172.17.0.1 -U $USER -d $DB -c "\copy $filename FROM '$file' DELIMITER ',' CSV HEADER"
done
