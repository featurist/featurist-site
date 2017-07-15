Euromoney is a world leading publisher of financial market information.

Euromoney and their subsidiary BCA Research set about building an application that allowed investors to explore the thousands of research documents and charts they produce each year. Part of the solution was to mark-up documents with semantic tags that allowed users to search for and find content related to commonly known entities such as countries, currencies, financial markets.

This was launched in May 2013 and has since won several awards in innovation and technology, and has been widely successful in the industry.

Euromoney approached Featurist to help build two components in this product: they needed a fast API for searching and linking documents and chart-data to be served to their CMS and consumer websites. And secondly, they needed a tool to allow editors to markup documents with semantic information so they could be searched and indexed on a well known ontology of countries, currencies, financial markets and instruments.

Featurist used C# and ASP.Net MVC to build out a central API used to store and index documents and chart data. The API was able to authenticate users from other websites, import content en-masse from other sources in BCA Research and present that information to a consumer website.

Featurist also built a semantic markup editor that allowed editors to markup an article with semantic tags from an ontology. The editor integrated with an editable text area which was able to switch modes from editing content to highlighting semantic concepts. To minimise regressions we tested the UI through a combination of angular style controller tests and sending UI events as is done in normal human interaction - this technique has since been evolved in the form of Browser Monkey.

Due to the number of different server components used, we were very conscious of the importance of having automated tests that covered every aspect of the architecture. To make this happen we had setup 20 different environments, each with their own resources, independent enough to be able to run automated tests concurrently for different branches as our work progressed.
