using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace GemHuntGUI
{
	/// <summary>
	/// Interaction logic for MainWindow.xaml
	/// </summary>
	public partial class MainWindow : Window
	{
		private string filePath;
		private string fileName;

		public MainWindow()
		{
			InitializeComponent();
		}

		private void Button_Click(object sender, RoutedEventArgs e)
		{

			string sourceFolder = @filePath;
			string destinationFile = @filePath + "/" + fileName + ".csv";

			string[] filePaths = Directory.GetFiles(sourceFolder, "Team*.csv");
			StreamWriter fileDest = new StreamWriter(destinationFile, true);

			int i;
			for (i = 0; i < filePaths.Length; i++)
			{
				string file = filePaths[i];

				string[] lines = File.ReadAllLines(file);

				if (i > 0)
				{
					lines = lines.Skip(1).ToArray();
				}

				foreach (string line in lines)
				{
					fileDest.WriteLine(line);
				}
			}

			fileDest.Close();
		}

		private void TextBox_TextChanged( object sender, TextChangedEventArgs e )
		{
			filePath = (sender as TextBox)?.Text;
			Debug.Print(filePath);
		}

		private void TextBox2_TextChanged( object sender, TextChangedEventArgs e ) {
			fileName = (sender as TextBox)?.Text;
			Debug.Print( filePath );
		}
	}
}
