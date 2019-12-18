#!/bin/bash

rm -rf var/view_preprocessed/ var/cache/ var/page_cache/ var/tmp/ var/generation/ pub/static/frontend/ pub/static/deployed_version.txt;

echo "Pub/Var cleared"

php bin/magento setup:static-content:deploy -f en_GB

echo "Static content deployed..."