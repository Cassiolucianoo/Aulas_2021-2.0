import java.util.Scanner;

public class Testenovo2 {
	
	public static int divide (int a, int b) {
		int c = -1;
		try {
			c = a/b;
			
		}
		catch (Exception e) {
			
			System.err.println("EXEPITION");
			
		}
		finally {
			System.err.println("Finally");
		}
		
		return c;
		
	}
	
	

	public static void main(String[] args) {
		
		 Scanner scan = new Scanner(System.in);
	        
	        
	        
	    
	        System.out.println(Testenovo2.divide(0 , 0));

	}

}
