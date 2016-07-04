# salesforce-migrate

Library for performing a sequence of salesforce metadata migrations.

The first argument specifies where to look for the migrations.

By default `salesforce-migrate` will look in `./salesforce/migrations`.

It is expected that every file in this directory contains salesforce metadata in Metadata API format. 

These migrations will be applied in lexicographical order.

`salesforce-migrate` will put a piece of metadata into the target Salesforce environment to keep track of the current migration.

By default all migrations will be applied. 

If you only want to apply N migrations, you may specify this with the `-c N` option.