import java.util.Arrays;

public class array {

	public static void main(String[] args) {
		
		double [] notasAlunoA = new double[4];
		
		notasAlunoA[0] = 2.9;
		notasAlunoA[1] = 8;
		notasAlunoA[2] = 3.9;
		notasAlunoA[3] = 3.9;
		
	System.out.println(Arrays.toString(notasAlunoA));
		
	
	double total = 0;
	for(int i = 0 ; i < notasAlunoA.length; i++) {
		
		total += notasAlunoA[i];
		
	}
	
	System.out.println("Media do aluno é = "+total /notasAlunoA.length);
		
		

	}

}
