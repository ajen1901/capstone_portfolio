Bechdel Test Statistical Analysis

Authors:

Audrey Jenkins

Tara Sothy

Jonathan Barnes

Joe Cyriac

As a class project, I worked with three other students to create a predictive model for whether or not a movie passes the Bechdel Test

The Bechdel Test is a test, originally from a comic strip, that measures female involvement in a film. The test has two requirements: 

1. There must be two female characters

2. They must have a conversation that is about something other than a man

There are other variations of the test that require things like "the women must be named" etc. . We used bechdeltest.com for our dataset, which uses the default Bechdel Test.

The statistical analysis was done using R, and the final report is in an R Markdown file, which is included in this repository. In addition, there is a compiled PDF version of the R Markdown file included for viewing purposes. In this report, more detailed information about the project can be found.

For our model, we used three primary variables as predictors:

1. The average score given to the movie from IMDb from males aged ~18 years

2. Whether or not the movie description on IMDb contains she/her/hers pronouns

3. Whether or not the movie description on IMDb contains he/him/his pronouns

We also experiemented with variables such as ratings from other demographics, region of the movie, etc., but they didn't end up being statistically significant enough to justify adding.

Our final model correctly predicts whether or not a movie passed the Bechdel test ~68.27% of the time, which is better than the base prediction (predicting based on the mean, which is correct 55.47% of the time).

My role on this project included: 

-Researching the Bechdel Test and its variations/ applications

-Retrieving data from bechdeltest.com, IMDb

-Cleaning data

-Creating custom variables (eg. scraping pronoun based variables from the description variable)

-Experimenting with logistical models

-Model validation
