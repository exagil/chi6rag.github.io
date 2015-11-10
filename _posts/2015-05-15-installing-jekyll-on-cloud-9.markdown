---
layout: page_blog
title:  "Installing Jekyll on Cloud9"
date:   2015-05-15 18:00:00
categories: blog tech
---

1. Sign up for Cloud 9

2. On the dashboard, click on create a new workspace (Green color button on the left)

    2.1 On the dropdown, click on ```Create a New Workspace```

    2.2 On the dialog box

      - Enter the name of the workspace - Ex: ```MyAwesomeBlog```

      - Choose Hosting as Hosted

      - Choose the framework as Custom

      Click on create

3. Switch to the newly created workspace by clicking on the name of the workspace on the left hand side under the "My Projects" tab

4. Click on the "START EDITING" button on the top. This would open your workspace in a new tab.

5. Go to ```http://jekyllrb.com/```

    - Scroll down to Quick Start Instructions

    - Follow the quick start guide by entering the commands in your workspace's terminal

6. Start the Jekyll Server by typing the following command

      ```
      jekyll serve --port $PORT --host $IP
      ```