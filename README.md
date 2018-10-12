# Magento2 - 2.2.x initial project setup using composer #

## composer install ##

Get your authentication keys by login to your Magento account.

https://marketplace.magento.com/customer/accessKeys/

http://devdocs.magento.com/guides/v2.0/install-gde/prereq/connect-auth.html

## Install Magento2 using command line ##

php -dmemory_limit=2G bin/magento setup:install --db-host=localhost --db-name=magento2 --db-user=root --db-password=yourdbpassword --base-url=https://magento.m2.localhost.com/ --admin-user=adminuser --admin-password=adminuserpassword --language=en_GB --currency=GBP --timezone=Europe/London --admin-email=user@yoursite.com --admin-firstname=Firstname --admin-lastname=Lastname --session-save=db

## Install Magento2 Sampledata ##

### Download sample data ###

php bin/magento sampledata:deploy

### Install sample data ###

php bin/magento setup:upgrade
