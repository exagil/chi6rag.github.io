---
layout: page_blog
title:  "Deploying Rails App backed by PostgreSQL on OpenShift"
date:   2015-08-18 06:00:00
categories: blog tech
---

Who hasn't struggled in deploying a Ruby on Rails App on OpenShift? Server timeouts, being refused to ssh due to inapt access rights, inability to find production logs and what not. But OpenShift is still the best free alternative to Heroku as of today. Here's why:
- Free Plan with 3 gears
- Great documentation
- Awesome CLI
- 24 hours application idling time (unlike 1 hour in Heroku)

###Here's how you would deploy your app on OpenShift:
1. Register for an account on [OpenShift](https://www.openshift.com/) and install the [rhc CLI](https://developers.openshift.com/en/getting-started-osx.html)
2. Login into the [Apps Console](https://openshift.redhat.com/app/console/applications) and click on the [Add Application](https://openshift.redhat.com/app/console/application_types) Button
3. Choose your App platform. In our case, [we choose Ruby on Rails 4](https://openshift.redhat.com/app/console/application_type/quickstart!76)
4. Set the Public URL and Database (MySQL or PostgreSQL). Optionally, you may type in the location of the source repo to fetch code from, but this will not be necessary.
5. Go back to the [App Console](https://openshift.redhat.com/app/console/applications) and copy the location of the Git Repository to clone
6. cd into the cloned directory and rm -rf *
7. cd ..  
   rails new "your_app_name_without_quotes"  
   (note that the name of the app should be same as that of the cloned directory)
8. cd "your_app_name_without_quotes"  
9. Make the required changes, set the production gem to 'pg' and bundle
10. Change the production part of database.yml as follows:
    
    production:  
	  adapter: postgresql  
	  encoding: utf8  
	  reconnect: false  
	  pool: 5  
	  database: <%=ENV['OPENSHIFT_APP_NAME']%>  
	  username: <%=ENV['OPENSHIFT_POSTGRESQL_DB_USERNAME']%>  
	  password: <%=ENV['OPENSHIFT_POSTGRESQL_DB_PASSWORD']%>  
	  host:   <%=ENV['OPENSHIFT_POSTGRESQL_DB_HOST']%>  
	  port:   <%=ENV['OPENSHIFT_POSTGRESQL_DB_PORT']%>  

	where adapter signifies PostgreSQL database which we are using for production(see point 9)  
10. In OpenShift, your app started in development mode, not production.
    Here's how you explicitly set it to production environment  
    rhc env set RAILS_ENV=production -a <your_app_name>
11. OpenShift does not run your Rails migrations by default.  
    ssh into your server, go to the app repository and run the migrations.  
		rhc ssh "your_app_name_without_quotes"  
    cd app-root/repo  
    bundle exec rake db:migrate  
12. visit "your_app_name_without_quotes" - "your_username_without_quotes".rhcloud.com.  
    If an error comes up, access the production logs using the following command:  
    rhc tail <your_app_name>
13. In my case, there was a conflict in the version of rack, [here's how I resolved it](http://stackoverflow.com/questions/28346389/ruby-bundle-install-error-on-openshift)

This would make your app up and running.  
Cheers!

References:  
1. [Tutorial - Deploying the ToDo application to OpenShift - Ruby on Rails](http://www.arubystory.com/2013/12/tutorial-todo-rails-openshift.html)  
2. [OpenShift is a Rails friendly PaaS – Part 1](https://blog.openshift.com/openshift-is-a-rails-friendly-paas-part-1/)  
3. [Getting Started with OpenShift Online](https://developers.openshift.com/en/getting-started-overview.html)  
4. [Deploying Ruby on Rails - OpenShift](https://developers.openshift.com/en/ruby-deploying-rails.html)  