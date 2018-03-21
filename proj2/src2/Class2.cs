namespace Class2
{
    /// <summary>
    /// Hello this is **Class2** from *Class2*
    /// </summary>
    public class Class2
    {
        private InnerClass _class;
        public int Value { get; }

        /// <summary>
        /// This is a ctor
        /// </summary>
        /// <param name="value">The value of the class</param>
        public Class2(int value)
        {
            Value = value;
        }

        public double ConvertToDouble()
        {
            return Value;
        }

        /// <summary>
        /// A method referencing a inner class
        /// </summary>
        /// <param name="name">The name</param>
        /// <param name="inner">A inner class with type <seealso cref="InnerClass"/></param>
        public void SetInnerClass(string name, InnerClass inner)
        {
            inner.Name = name;
            _class = inner;
        }

        public class InnerClass
        {
            public string Name { get; set; }
        }
    }
}
