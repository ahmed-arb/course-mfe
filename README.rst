Course MFE
=================================

Introduction
------------

This repository is a Open edX micro-frontend to display courses list. 


**Installation and Startup**

In the following steps, replace "frontend-template-application' with the name of the repo you created when copying this template above.

1. Clone your new repo:

  ``git clone https://github.com/ahmed-arb/course-mfe.git``

2. Use node v12.x.

   The micro-frontend build scripts support node 12.  Using other major versions of node *may* work, but is unsupported.  For convenience, this repository includes an .nvmrc file to help in setting the correct node version via `nvm <https://github.com/nvm-sh/nvm>`_.

3. Install npm dependencies:

  ``cd course-mfe && npm install``

4. Update the application port to use for local development:

   Default port is 8080. If this does not work for you, update the line `PORT=8080` to your port in all .env.* files

5. Start the dev server:

  ``npm start``

The dev server is running at `http://localhost:8080 <http://localhost:8080>`_ or whatever port you setup.

Making Your New Project's README File
-------------------------------------

Move the file ``README-template-frontend-app.rst`` to your project's ``README.rst`` file. Please fill out all
the sections - this helps out all developers understand your MFE, how to install it, and how to use it.

Project Structure
-----------------

The source for this project is organized into nested submodules according to the ADR `Feature-based Application Organization <https://github.com/openedx/frontend-template-application/blob/master/docs/decisions/0002-feature-based-application-organization.rst>`_.

Build Process Notes
-------------------

**Production Build**

The production build is created with ``npm run build``.
