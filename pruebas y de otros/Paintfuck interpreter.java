/*
    https://gist.github.com/ldcc/f5d3aa8081dedb150cd5169fe6593ace#file-13_paintfuck-interpreter-java
*/
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Stack;
import java.util.stream.Collectors;

//import org.junit.Test;
//import static org.junit.Assert.assertEquals;
//import org.junit.runners.JUnit4;

// Solution
public class Paintfuck {
    public static String interpreter(String code, int iterations, int width, int height) {
        code = code.replaceAll("[^nesw\\[\\]*]*", "");
        int[][] tapes = new int[height][width];
        List<Integer> pres = new ArrayList<>();
        Stack<Boolean> braces = new Stack<>();
        braces.push(true);
        int currX = 0;
        int currY = 0;
        for (int i = 0; i < code.length() && iterations > 0; i++, iterations--) {
            if (currY >= tapes.length) currY = 0;
            else if (currX >= tapes[0].length) currX = 0;
            else if (currY < 0) currY = tapes.length - 1;
            else if (currX < 0) currX = tapes[0].length - 1;
            if (code.charAt(i) == ']' || code.charAt(i) == '[') {
                if (code.charAt(i) == ']') {
                    braces.pop();
                    i = tapes[currY][currX] != 0 ? pres.get(braces.size() - 1) : i;
                } else {
                    braces.push(tapes[currY][currX] != 0);
                    pres.add(i - 1);
                    iterations++;
                }
            } else if (braces.peek()) {
                if (code.charAt(i) == 'e') ++currX;
                else if (code.charAt(i) == 'w') --currX;
                else if (code.charAt(i) == 's') ++currY;
                else if (code.charAt(i) == 'n') --currY;
                else if (code.charAt(i) == '*') tapes[currY][currX] ^= 1;
            } else iterations++;
        }
        return toTapes(tapes);
    }

    private static String toTapes(int[][] tapes) {
        return Arrays.stream(tapes)
                .map(tape -> Arrays.stream(tape)
                        .mapToObj(String::valueOf)
                        .collect(Collectors.joining()))
                .collect(Collectors.joining("\r\n"));
    }

    public static void main(String[] args) {
        var res = Paintfuck.interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 0, 6, 9);
        System.out.println(res);
        System.out.println();
        res = Paintfuck.interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 7, 6, 9);
        System.out.println(res);
//        comparaResultado("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 0, 6, 9, "000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000");
//        comparaResultado("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 7, 6, 9, "111100\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000\r\n000000");
//        comparaResultado("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 19, 6, 9, "111100\r\n000010\r\n000001\r\n000010\r\n000100\r\n000000\r\n000000\r\n000000\r\n000000");
//        comparaResultado("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 42, 6, 9, "111100\r\n100010\r\n100001\r\n100010\r\n111100\r\n100000\r\n100000\r\n100000\r\n100000");
//        comparaResultado("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 100, 6, 9, "111100\r\n100010\r\n100001\r\n100010\r\n111100\r\n100000\r\n100000\r\n100000\r\n100000");
    }
}

// Test
//public class SolutionTests {
//    @Test
//    public void random() {
//        char commands[] = "nesw*".toCharArray();
//        int iterations = (int)(1001 * Math.random());
//        char randomPaintfuckProgram[] = new char[100 + (int)(901 * Math.random())];
//        for (int i = 0; i < randomPaintfuckProgram.length; i++) {
//            randomPaintfuckProgram[i] = commands[(int)(5 * Math.random())];
//        }
//        String code = new String(randomPaintfuckProgram);
//        assertEquals(GgmoySolution.interpreter(code, iterations, 10, 10), Paintfuck.interpreter(code, iterations, 10, 10));
//    }
//}
