

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;

import javax.imageio.ImageIO;

import org.jcodec.api.FrameGrab;
import org.jcodec.common.io.NIOUtils;
import org.jcodec.common.model.Picture;

public class TesteJCode {

	public static void main(String[] args) {
		double startSec = 51.632;
		int frameCount = 10;
		File file = new File("video.mp4");

		FrameGrab grab = FrameGrab.createFrameGrab(NIOUtils.readableChannel(file));
		grab.seekToSecondPrecise(startSec);

		for (int i=0;i<frameCount;i++) {
		    Picture picture = grab.getNativeFrame();
		    System.out.println(picture.getWidth() + "x" + picture.getHeight() + " " + picture.getColor());
		    //for JDK (jcodec-javase)
		    BufferedImage bufferedImage = AWTUtil.toBufferedImage(picture);
		    ImageIO.write(bufferedImage, "png", new File("frame"+i+".png"));

		    //for Android (jcodec-android)
		    Bitmap bitmap = AndroidUtil.toBitmap(picture);
		    bitmap.compress(Bitmap.CompressFormat.PNG, 100, new FileOutputStream("frame"+i+".png")); 
		}
	}

}
