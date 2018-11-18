from flask import Flask,render_template,request
app=Flask(__name__)
@app.route("/")
def Index():
    return render_template('home.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/marklist')
def marksheet():
    return render_template('marklist.html')


def getPercent(m,t):
    p=(int(m)/int(t))*100
    return p

def grade(p):
    
    if(p>95):
        g="S"
    elif(p>90):
        g="A+"
    elif(p>85):
        g="A"
    elif(p>80):
        g="B+"
    elif(p>75):
        g="B"
    elif(p>70):
        g="C+"
    elif(p>65):
        g="C"
    elif(p>60):
        g="D+"
    elif(p>55):
        g="D"
    elif(p<50):
        g="F"
    return g

@app.route('/result',methods=['GET','POST'])
def result():
    if(request.method=='POST'):
        getName=request.form['name']
        getRegNo=request.form['regno']
        getsem=request.form['semester']
        getcol=request.form['college']
        getsname1=request.form['subject1']
        getsmark1=request.form['mark1']
        getstotal1=request.form['t1']
        getsname2=request.form['subject2']
        getsmark2=request.form['mark2']
        getstotal2=request.form['t2']
        getsname3=request.form['subject3']
        getsmark3=request.form['mark3']
        getstotal3=request.form['t3']
        p1=getPercent(getsmark1,getstotal1)
        p2=getPercent(getsmark2,getstotal2)
        p3=getPercent(getsmark3,getstotal3)
        g1=grade(p1)
        g2=grade(p2)
        g3=grade(p3)
        if(g1=="F" or g2=="F" or g3=="F"):
            status=Failed
        else:
            status=Pass
        return render_template('result.html',)






if(__name__=='__main__'):
    app.run(debug=True)