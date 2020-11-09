package com.abrha;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class AddServlet extends HttpServlet {	
	public void service(HttpServletRequest req, HttpServletResponse res) throws IOException {
		int num1 = Integer.parseInt(req.getParameter("Num1"));
		int num2 = Integer.parseInt(req.getParameter("Num2"));
		int sum = num1+num2;
		
		System.out.println(sum);
		
		PrintWriter pwt = res.getWriter();
		pwt.println("The result for the above addition is:"+sum +" good!");
	}

}
