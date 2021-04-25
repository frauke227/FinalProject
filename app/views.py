from flask import Flask, render_template, url_for, jsonify
from app import app
from contentful import Client


@app.route('/')
@app.route('/home')
def index():
    heading = "Melkam Ethiopia Cooking Box"
    subheading = "This is the subheading of our page"
    return render_template('index.html', heading=heading, subheading=subheading)


@app.route('/shop')
def shop():
    heading = "Shop | Melkam Ethiopia"
    subheading = "This is the subheading of our page"
    return render_template('shop.html', heading=heading, subheading=subheading)


@ app.route('/about')
def about():
    heading = "About | Melkam Ethiopia"
    subheading = "This is the subheading of our page"
    return render_template('about.html', heading=heading, subheading=subheading)


@ app.route('/ethiopianFood')
def ethiopianFood():
    heading = "Ethiopian Food | Melkam Ethiopia"
    subheading = "This is the subheading of our page"
    return render_template('ethiopianFood.html', heading=heading, subheading=subheading)
