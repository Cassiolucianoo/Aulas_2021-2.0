import java.util.Arrays;

public class array2 {

	public static void main(String[] args) {
		
		double [] notasAlunoA = new double[3];
		
		notasAlunoA[0] = 2.9;
		notasAlunoA[1] = 8;
		notasAlunoA[2] = 3.9;
		
	System.out.println(Arrays.toString(notasAlunoA));
		
	
	double total = 0;
	for(int i = 0 ; i < 3; i++) {
		
		total += notasAlunoA[i];
		
	}
	
	System.out.println("Media do aluno é = "+total /3);
		
		

	}

}
