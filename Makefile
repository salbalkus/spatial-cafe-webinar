FILE=deck_prjct
TITLE=202X_conf_prjct

all: html pdf

html:
	quarto render $(FILE).qmd
	cp $(FILE).html index.html

pdf:
	decktape reveal $(FILE).html $(FILE).pdf
