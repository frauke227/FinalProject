from flask import Flask, render_template, url_for
from app import app

@app.route('/')
@app.route('/home')
def index():
	heading = "Python Tutorial"
	subheading = "This is the subheading of our page"
	return render_template('index.html', heading=heading, subheading=subheading)

@app.route('/shop')
def shop():
	heading = "Python Tutorial"
	subheading = "This is the subheading of our page"
	return render_template('shop.html', heading=heading, subheading=subheading)

@app.route('/about')
def about():
	heading = "Python Tutorial"
	subheading = "This is the subheading of our page"
	return render_template('about.html', heading=heading, subheading=subheading)

@app.route('/ethiopianFood')
def ethiopianFood():
	heading = "Python Tutorial"
	subheading = "This is the subheading of our page"
	return render_template('ethiopianFood.html', heading=heading, subheading=subheading)

@app.route('/cart')
def cart():
	heading = "Python Tutorial"
	subheading = "This is the subheading of our page"
	return render_template('cart.html', heading=heading, subheading=subheading)