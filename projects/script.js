function Input_num()
{
    var input = document.getElementsByName('array[]');
 
    for (var i = 0; i < input.length; i++) {
        var a = input[i];
        k = k + "array[" + i + "].value= "
                           + a.value + " ";
    }
}